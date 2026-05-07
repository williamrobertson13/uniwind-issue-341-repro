import { Pressable, Text, View } from 'react-native';

import { copy163 } from '../generated/copy/copy163';
import { layout163 } from '../generated/layouts/layout163';
import { palette163 } from '../generated/palettes/palette163';

export function Screen163() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout163.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy163.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy163.detail} / {palette163.name}
			</Text>
		</View>
	);
}
