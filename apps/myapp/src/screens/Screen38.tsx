import { Pressable, Text, View } from 'react-native';

import { copy38 } from '../generated/copy/copy38';
import { layout38 } from '../generated/layouts/layout38';
import { palette38 } from '../generated/palettes/palette38';

export function Screen38() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout38.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy38.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy38.detail} / {palette38.name}
			</Text>
		</View>
	);
}
