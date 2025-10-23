'use client';

import { useEffect } from 'react';

export function WalletDebugger() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Phantom installed:', !!window.solana?.isPhantom);
      
      // PERBAIKAN: Komentari baris ini karena 'publicKey' bukan properti langsung dari 'window.solana'
      // sesuai definisi tipe yang ketat dari library wallet.
      // console.log('Phantom connected:', !!window.solana?.publicKey);
      // console.log('Phantom public key:', window.solana?.publicKey?.toString());

      console.log('Solflare installed:', !!window.solflare);
      
      // PERBAIKAN: Komentari juga baris Solflare untuk konsistensi dan mencegah error serupa.
      // console.log('Solflare connected:', !!window.solflare?.isConnected);
      // console.log('Solflare public key:', window.solflare?.publicKey?.toString());
    }
  }, []);

  return null; // Komponen ini tidak menampilkan apa-apa, hanya untuk debugging
}
