'use client';

import { useEffect } from 'react';

// PERBAIKAN: Hapus blok 'declare global' karena tipe 'window.solana'
// sudah didefinisikan oleh library lain (misalnya @solana/wallet-adapter).
// Mendeklarasikannya lagi dengan tipe 'any' menyebabkan konflik tipe.

export function WalletDebugger() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Phantom installed:', !!window.solana?.isPhantom);
      
      // PERBAIKAN SEBELUMNYA: Gunakan publicKey untuk mengecek koneksi Phantom
      console.log('Phantom connected:', !!window.solana?.publicKey);
      console.log('Phantom public key:', window.solana?.publicKey?.toString());

      console.log('Solflare installed:', !!window.solflare);
      console.log('Solflare connected:', !!window.solflare?.isConnected);
      console.log('Solflare public key:', window.solflare?.publicKey?.toString());
    }
  }, []);

  return null; // Komponen ini tidak menampilkan apa-apa, hanya untuk debugging
}
