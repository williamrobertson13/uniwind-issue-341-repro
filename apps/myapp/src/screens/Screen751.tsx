import { Pressable, Text, View } from 'react-native';

import { copy751 } from '../generated/copy/copy751';
import { layout751 } from '../generated/layouts/layout751';
import { palette751 } from '../generated/palettes/palette751';

export function Screen751() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout751.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy751.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy751.detail} / {palette751.name}
			</Text>
		</View>
	);
}
