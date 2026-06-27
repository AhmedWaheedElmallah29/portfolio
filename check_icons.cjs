const si = require('react-icons/si');
const github = Object.keys(si).filter(k => k.toLowerCase().includes('github'));
console.log('SI GitHub:', github.join(', '));

const m = require('lucide-react');
const git = Object.keys(m).filter(k => k.toLowerCase().includes('git'));
console.log('Lucide git:', git.join(', '));
