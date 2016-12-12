/* Notes
* Um ein Ergebnis zu erhalten, gibt der programmierer alle Befehle dem Computer vor.
* Zeile für Zeile - Anweisung für Anweisung
*   Beispiel ist die Programmierung von Microcontroller (Ardunio)
* Aber auch in JS kann dieses pardigma angewandt werden.
* Jeder Codeblock ist dabei wie ein Kapitel in einm Buch.
* Wenn jeder Codeblock einmal durchlaufen wurde, ist das Programm zu ende
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/045.jpg"
            orangeHeadline="Imperatives"
            blueHeadline="programmieren"
        />
    </div>
);

slide.title = 'imperatives programmieren';

export default slide;