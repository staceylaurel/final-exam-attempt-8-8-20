import * as jwt from 'jsonwebtoken';
import config from '../config';

export interface IPayload {
	userid: number;
}

export const createToken = (payload: IPayload) => {
	const token = jwt.sign(payload, config.auth.secret, { expiresIn: '15d' });
	return token;
};