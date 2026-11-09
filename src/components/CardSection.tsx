import { useState } from "react";
import { cn } from "@/lib/utils";

import Card from "@/components/Card";

export default function CardSection() {
    const [firstFlipped, setFirstFlipped] = useState(false);
    const [quoteIndex, setQuoteIndex] = useState(0);

    // Both cards show the same quote; flipping advances it for the next reveal.
    const quotes = [
        {
            "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
            "author": "Colossians 3:23 (NIV)"
        },
        {
            "text": "Well done is better than well said.",
            "author": "Benjamin Franklin"
        },
        {
            "text": "Nothing in this world can take the place of persistence.",
            "author": "Calvin Coolidge"
        },
        {
            "text": "Great works are performed not by strength, but perseverance.",
            "author": "Samuel Johnson"
        },
        {
            "text": "Nothing ever comes to me that is worth having except as the result of hard work.",
            "author": "Booker T. Washington"
        },
        {
            "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas Edison"
        },
        {
            "text": "Everybody can be great because anybody can serve.",
            "author": "Martin Luther King Jr."
        },
        {
            "text": "All hard work brings a profit, but mere talk leads only to poverty.",
            "author": "Proverbs 14:23 (NIV)"
        },
        {
            "text": "Diligent hands will rule, but laziness ends in forced labor.",
            "author": "Proverbs 12:24 (NIV)"
        },
        {
            "text": "Far and away the best prize that life offers is the chance to work hard at work worth doing.",
            "author": "Theodore Roosevelt"
        },
        {
            "text": "If there is no struggle, there is no progress.",
            "author": "Frederick Douglass"
        },
        {
            "text": "No gains without pains.",
            "author": "Benjamin Franklin"
        },
        {
            "text": "Diligence is the mother of good luck.",
            "author": "Benjamin Franklin"
        },
        {
            "text": "Work while it is called today, for you know not how much you may be hindered tomorrow.",
            "author": "Benjamin Franklin"
        },
        {
            "text": "Work is love made visible.",
            "author": "Kahlil Gibran"
        }
    ];

    const flipFunction = () => {
        setTimeout(() => {
            setQuoteIndex((i) => (i + 1) % quotes.length);
        }, 150);

        setFirstFlipped((f) => !f);
    };

    return (
        <div
        className={cn("grid gap-[25px] justify-center")}>
            <Card
            flipped={firstFlipped}
            quote={quotes[quoteIndex].text}
            quoteSource={quotes[quoteIndex].author}
            flipFunction={flipFunction} />

            <Card
            flipped={!firstFlipped}
            quote={quotes[quoteIndex].text}
            quoteSource={quotes[quoteIndex].author}
            flipFunction={flipFunction} />
        </div>
    );
}
