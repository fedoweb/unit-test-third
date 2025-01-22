import getHealth from "../app";

test.each([
    ['', 100, 'healthy'],
    ['', 51, 'healthy'],
    ['', 50, 'wounded'],
    ['', 15, 'wounded'],
    ['', 14, 'critical']
])(
('should return the correct result of health status'), (name, health, expected) => {
    let result = getHealth({name, health});

    expect(result).toBe(expected);
})