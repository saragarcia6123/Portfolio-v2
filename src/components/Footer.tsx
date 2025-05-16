export default function Footer() {
  return (
    <footer className="md:pl-68 w-full p-8 flex justify-center items-end gap-1 bg-white/5">
      <span className="flex-nowrap">© {new Date().getFullYear()}</span>
      <span>saragarcia.dev</span>
    </footer>
  );
}
