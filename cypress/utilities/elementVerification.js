export function elementTextEquals(elementText) {
    return (element) => expect(element.text()).equal(elementText);
}

export function elementContains(textFragment) {
    return (element) => expect(element.text()).contain(textFragment);
}