export default {
  github: 'https://github.com/turbocolor/colorshelll',
  docsRepositoryBase: 'https://github.com/turbocolor/colorshelll-docs/blob/main',
  titleSuffix: ' – colorshelll',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">colorshelll</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      Display colors and gradients In your command-line in a wide range of different programming languages
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="colorshelll: Display colors and gradients In your command-line in a wide range of different programming languages" />
      <meta name="og:description" content="colorshelll: Display colors and gradients In your command-line in a wide range of different programming languages" />
      <meta name="og:title" content="colorshelll: Display colors and gradients In your command-line in a wide range of different programming languages" />
      <link rel="icon" href="https://ph-files.imgix.net/2fc7ebb9-116f-4f54-8bb6-ccf4a369095d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=72&h=72&fit=crop&bg=0fff&dpr=2" type="image/x-icon"></link>
    </>
  ),
  search: true,
  unstable_flexsearch: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © colorshelll and <a href="/contributors">contributors</a>.</>
}
