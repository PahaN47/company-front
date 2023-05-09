declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: React.FC<React.SVGAttributes<SVGElement> & { slot?: string; title?: string }>;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}
