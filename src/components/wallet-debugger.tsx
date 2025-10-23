'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    solana?: any;
    solflare?: any;
  }
}

export function WalletDebugger() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Phantom installed:', !!window.solana?.isPhantom);
      
      // PERBAIKAN: Ganti pengecekan isConnected dengan publicKey
      console.log('Phantom connected:', !!window.solana?.publicKey);
      console.log('Phantom public key:', window.solana?.publicKey?.toString());

      console.log('Solflare installed:', !!window.solflare);
      console.log('Solflare connected:', !!window.solflare?.isConnected);
      console.log('Solflare public key:', window.solflare?.publicKey?.toString());
    }
  }, []);

  return null; // Komponen ini tidak menampilkan apa-apa, hanya untuk debugging
}
