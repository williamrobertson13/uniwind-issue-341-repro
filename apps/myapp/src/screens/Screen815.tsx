import { Pressable, Text, View } from 'react-native';

import { copy815 } from '../generated/copy/copy815';
import { layout815 } from '../generated/layouts/layout815';
import { palette815 } from '../generated/palettes/palette815';

export function Screen815() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout815.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy815.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy815.detail} / {palette815.name}
			</Text>
		</View>
	);
}
