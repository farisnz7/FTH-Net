export function MaintenanceBanner() {
  return (
    <div style={{
      background: '#ffeb3b',
      color: '#222',
      padding: '1rem',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      zIndex: 9999,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    }}>
      Website sedang dalam mode maintenance.<br />
      Konten tidak dapat ditampilkan karena ada masalah koneksi ke server atau data belum tersedia.<br />
      Silakan hubungi admin jika masalah berlanjut.
    </div>
  );
}
