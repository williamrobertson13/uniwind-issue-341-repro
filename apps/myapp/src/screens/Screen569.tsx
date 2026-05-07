import { Pressable, Text, View } from 'react-native';

import { copy569 } from '../generated/copy/copy569';
import { layout569 } from '../generated/layouts/layout569';
import { palette569 } from '../generated/palettes/palette569';

export function Screen569() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout569.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy569.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy569.detail} / {palette569.name}
			</Text>
		</View>
	);
}
