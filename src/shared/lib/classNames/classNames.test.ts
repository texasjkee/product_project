// import { classNames } from "./classNames";
import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('wirh only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class#1 class#2'
        expect(classNames('someClass', {}, ['class#1', 'class#2'])).toBe(expected)
    });

    test('with mods', () => {
        const expected = 'someClass class#1 class#2 hovered scrollable'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class#1', 'class#2']
        )).toBe(expected)
    });

    test('with mods false', () => {
        const expected = 'someClass class#1 class#2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class#1', 'class#2']
        )).toBe(expected)
    });

    test('with mods undefined', () => {
        const expected = 'someClass class#1 class#2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class#1', 'class#2']
        )).toBe(expected)
    });
});