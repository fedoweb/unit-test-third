import fetchData from '../http';
import { getLevel } from '../app';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('return when response is error', async () => {
    fetchData.mockResolvedValue({ status: 'error' });

    const result = await getLevel(233);
    expect(fetchData).toHaveBeenCalledWith(`https://server/user/233`);
    expect(result).toBe('Информация об уровне временно недоступна');
});

test('return when response is ok', async () => {
    fetchData.mockResolvedValue({ status: 'ok', level: 42 });

    const result = await getLevel(123);
    expect(fetchData).toHaveBeenCalledWith(`https://server/user/123`);
    expect(result).toBe('Ваш текущий уровень: 42');
});