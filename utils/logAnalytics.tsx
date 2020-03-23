export function logAnalytics(event: string) {
  const gtag = (window as any).gtag;
  if (!gtag) {
    // eslint-disable-next-line no-console
    console.log(event);
    return;
  }
  gtag('event', event);
}
