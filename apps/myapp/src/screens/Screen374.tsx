import { Pressable, Text, View } from 'react-native';

import { copy374 } from '../generated/copy/copy374';
import { layout374 } from '../generated/layouts/layout374';
import { palette374 } from '../generated/palettes/palette374';

export function Screen374() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout374.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy374.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy374.detail} / {palette374.name}
			</Text>
		</View>
	);
}
