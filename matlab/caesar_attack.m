% CaesarScope - Caesar Cipher Brute Force Attack
% The attacker does NOT know the encryption key.
% Works with MATLAB and GNU Octave.
clc; clear;
cipher = input('Enter intercepted Caesar ciphertext: ', 's');
fprintf('\nKEY  |  PLAINTEXT CANDIDATE\n');
fprintf('-----+--------------------------------------\n');
for key = 0:25
    plain = cipher;
    upper = (cipher >= 'A' & cipher <= 'Z');
    lower = (cipher >= 'a' & cipher <= 'z');
    plain(upper) = char(mod(double(cipher(upper)) - 65 - key, 26) + 65);
    plain(lower) = char(mod(double(cipher(lower)) - 97 - key, 26) + 97);
    fprintf('%02d   |  %s\n', key, plain);
end
fprintf('\nThe intended plaintext must be identified from context.\n');
