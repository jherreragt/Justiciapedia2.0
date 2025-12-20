import { CandidateData } from '../types';
import csvData from './justiciapedia_-_hoja_1.csv?raw';
import { parseCSV } from '../utils/csvParser';

export const candidates: CandidateData[] = parseCSV(csvData);
