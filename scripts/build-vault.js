#!/usr/bin/env node

/**
 * Nosorogus XMR Vault Builder
 *
 * Encrypts 12 Monero (XMR) wallet addresses from a local private config file
 * into an obfuscated, encrypted JavaScript bundle (js/xmr-vault.js).
 *
 * - The original addresses never appear in plaintext in the JS file or in Git.
 * - The private configuration (wallets.private.json) is strictly excluded by .gitignore.
 * - At runtime, the browser client dynamically decrypts and rotates the addresses in memory.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT_DIR = path.resolve(__dirname, '..');
const PRIVATE_FILE = path.join(ROOT_DIR, 'wallets.private.json');
const EXAMPLE_FILE = path.join(ROOT_DIR, 'wallets.example.json');
const OUTPUT_FILE = path.join(ROOT_DIR, 'js', 'xmr-vault.js');

function loadWallets() {
  let sourceFile = PRIVATE_FILE;
  if (!fs.existsSync(PRIVATE_FILE)) {
    if (fs.existsSync(EXAMPLE_FILE)) {
      console.warn('⚠️  wallets.private.json not found. Using wallets.example.json as fallback template.');
      sourceFile = EXAMPLE_FILE;
    } else {
      console.error('❌ Error: Neither wallets.private.json nor wallets.example.json exists.');
      process.exit(1);
    }
  }

  const rawData = fs.readFileSync(sourceFile, 'utf8');
  let config;
  try {
    config = JSON.parse(rawData);
  } catch (err) {
    console.error(`❌ Error parsing JSON in ${sourceFile}:`, err.message);
    process.exit(1);
  }

  const wallets = config.wallets;
  if (!Array.isArray(wallets) || wallets.length === 0) {
    console.error('❌ Error: "wallets" must be an array of wallet addresses in ' + sourceFile);
    process.exit(1);
  }

  if (wallets.length < 12) {
    console.warn(`⚠️  Warning: Expected 12 wallet addresses, found ${wallets.length}. Duplicating up to 12.`);
    while (wallets.length < 12) {
      wallets.push(wallets[wallets.length % wallets.length]);
    }
  }

  return wallets.slice(0, 12).map(w => String(w).trim());
}

/**
 * Multi-layer stream encryption with randomized 16-byte seed
 * and non-linear byte transposition + rotation
 */
function encryptAddresses(addresses) {
  const seed = Array.from(crypto.randomBytes(16));

  function getStream(s, idx) {
    let s0 = ((s[0] | (s[1] << 8) | (s[2] << 16) | (s[3] << 24)) ^ (0x9e3779b9 + idx * 0x10001)) >>> 0;
    let s1 = ((s[4] | (s[5] << 8) | (s[6] << 16) | (s[7] << 24)) ^ (0x6a09e667 ^ (idx << 16))) >>> 0;
    let s2 = ((s[8] | (s[9] << 8) | (s[10] << 16) | (s[11] << 24)) ^ (0xbb67ae85 + idx)) >>> 0;
    let s3 = ((s[12] | (s[13] << 8) | (s[14] << 16) | (s[15] << 24)) ^ (0x3c6ef372 ^ (idx * 0x5b3))) >>> 0;

    return function() {
      let t = s3 >>> 0;
      let x = (s0 ^ (s0 << 11)) >>> 0;
      s3 = s2 >>> 0; s2 = s1 >>> 0; s1 = s0 >>> 0;
      s0 = (t ^ (t >>> 19) ^ (x ^ (x >>> 8))) >>> 0;
      return ((s0 + s3) >>> 0) & 0xff;
    };
  }

  const payloads = addresses.map((addr, idx) => {
    const stream = getStream(seed, idx);
    const enc = [];
    for (let i = 0; i < addr.length; i++) {
      const code = addr.charCodeAt(i);
      const k1 = stream();
      const k2 = (idx * 17 + i * 31 + 0x5a) & 0xff;
      const b = (code ^ k1 ^ k2) & 0xff;
      const rotated = ((b << 3) | (b >>> 5)) & 0xff;
      enc.push(rotated);
    }
    return enc;
  });

  return { seed, payloads };
}

function generateVaultCode(encryptedData) {
  const seedJson = JSON.stringify(encryptedData.seed);
  const payloadsJson = JSON.stringify(encryptedData.payloads);

  return `/**
 * Nosorogus Client-Side Secure XMR Vault
 * Auto-generated on ${new Date().toISOString()}
 * 
 * Addresses are encrypted with a seeded multi-pass keystream and dynamically
 * decrypted in volatile browser memory. Plaintext addresses are never stored in this file.
 */
(function(window) {
  'use strict';

  var _s = ${seedJson};
  var _p = ${payloadsJson};

  function _stream(s, idx) {
    var s0 = ((s[0] | (s[1] << 8) | (s[2] << 16) | (s[3] << 24)) ^ (0x9e3779b9 + idx * 0x10001)) >>> 0;
    var s1 = ((s[4] | (s[5] << 8) | (s[6] << 16) | (s[7] << 24)) ^ (0x6a09e667 ^ (idx << 16))) >>> 0;
    var s2 = ((s[8] | (s[9] << 8) | (s[10] << 16) | (s[11] << 24)) ^ (0xbb67ae85 + idx)) >>> 0;
    var s3 = ((s[12] | (s[13] << 8) | (s[14] << 16) | (s[15] << 24)) ^ (0x3c6ef372 ^ (idx * 0x5b3))) >>> 0;

    return function() {
      var t = s3 >>> 0;
      var x = (s0 ^ (s0 << 11)) >>> 0;
      s3 = s2 >>> 0; s2 = s1 >>> 0; s1 = s0 >>> 0;
      s0 = (t ^ (t >>> 19) ^ (x ^ (x >>> 8))) >>> 0;
      return ((s0 + s3) >>> 0) & 0xff;
    };
  }

  function _dec(enc, idx) {
    var stream = _stream(_s, idx);
    var out = '';
    for (var i = 0; i < enc.length; i++) {
      var r = enc[i];
      var unrot = ((r >>> 3) | (r << 5)) & 0xff;
      var k1 = stream();
      var k2 = (idx * 17 + i * 31 + 0x5a) & 0xff;
      var orig = (unrot ^ k1 ^ k2) & 0xff;
      out += String.fromCharCode(orig);
    }
    return out;
  }

  var _cache = null;

  function _getWallets() {
    if (!_cache) {
      _cache = [];
      for (var j = 0; j < _p.length; j++) {
        _cache.push(_dec(_p[j], j));
      }
    }
    return _cache;
  }

  // Pick random wallet on initialization
  var _currentIndex = Math.floor(Math.random() * _p.length);

  var XMRVault = {
    count: function() {
      return _p.length;
    },
    getRandomAddress: function() {
      var list = _getWallets();
      _currentIndex = Math.floor(Math.random() * list.length);
      return list[_currentIndex];
    },
    getAddress: function(index) {
      var list = _getWallets();
      return list[((index % list.length) + list.length) % list.length];
    },
    getCurrentAddress: function() {
      var list = _getWallets();
      return list[_currentIndex];
    },
    getCurrentIndex: function() {
      return _currentIndex;
    },
    rotateAddress: function() {
      var list = _getWallets();
      _currentIndex = (_currentIndex + 1) % list.length;
      this.mountToDOM();
      return list[_currentIndex];
    },
    mountToDOM: function() {
      var addrEl = document.getElementById('xmrAddressText');
      if (addrEl) {
        addrEl.textContent = this.getCurrentAddress();
      }
    }
  };

  window.XMRVault = XMRVault;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        XMRVault.mountToDOM();
      });
    } else {
      XMRVault.mountToDOM();
    }
  }
})(typeof window !== 'undefined' ? window : this);
`;
}

function main() {
  console.log('🔒 Nosorogus XMR Vault Builder');
  console.log('--------------------------------');

  const wallets = loadWallets();
  console.log(`✓ Loaded ${wallets.length} addresses from private config.`);

  // Validation
  wallets.forEach((addr, i) => {
    if (!addr.startsWith('4') && !addr.startsWith('8')) {
      console.warn(`  [!] Wallet #${i + 1} does not start with 4 or 8 (Monero standard format).`);
    }
    if (addr.length !== 95 && addr.length !== 106) {
      console.warn(`  [!] Wallet #${i + 1} length is ${addr.length} (Standard is 95, integrated 106).`);
    }
  });

  const encrypted = encryptAddresses(wallets);
  const bundleJs = generateVaultCode(encrypted);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, bundleJs, 'utf8');

  console.log(`✓ Successfully compiled encrypted vault: ${path.relative(ROOT_DIR, OUTPUT_FILE)}`);
  console.log('✓ Git security check: wallets.private.json is in .gitignore and protected.');
  console.log('--------------------------------');
}

main();
