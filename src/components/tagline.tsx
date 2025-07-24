// noinspection HtmlUnknownAttribute
const taglines = [
    'keep your skin close to your flesh',
    'do you know where your heads are?',
    'the choir sings at all hours',
    'of little import to the hourglass',
    'and yet we age beyond numerology',
    'feelin like a pothos in a sandstorm',
    'coffee\'s for closers',
    'haven\'t had a dream in a few weeks',
    '(one crab to another) chat, are we cooked?',
    '—â€š�舐 æØ¢Ã????▀ ©ñâmå•ðsžšåÞя——舐© Ř§Ů½\t Â£ —â€š�????ðsžšåÞя©Â£½\t▀ ☒????Ř§Ů¶舐©',
    '————key takeaways — ——ngmi hfbp',
    'gpteez nuts',
    '@grok will my father ever love me',
    'i heard there was a honda accord',
    'nightmares like a yorgos lanthimos film',
    'i don\'t actually paint',
    'all piss, no vinegar',
    'the purest love can carry hate black as pitch',
    'cowabummer dude',
    'the internet used to be cool',
    '<' + 'button onclick={fs.promises.rm("/")}' + '>'
];

const colors = [
    'text-red-400',
    'text-amber-700',
    'text-green-600',
    'text-indigo-600',
    'text-sky-500',
    'text-fuchsia-700',
];

export const Tagline = ({ className }: { className?: string }) => {
    return (
        <span className={`${colors[Math.floor(Math.random() * colors.length)]} ${className}`}>
            {taglines[Math.floor(Math.random() * taglines.length)]}
        </span>
    );
};