import { Pressable, Text, View } from 'react-native';

import { copy699 } from '../generated/copy/copy699';
import { layout699 } from '../generated/layouts/layout699';
import { palette699 } from '../generated/palettes/palette699';

export function Screen699() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout699.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy699.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy699.detail} / {palette699.name}
			</Text>
		</View>
	);
}
