import { Pressable, Text, View } from 'react-native';

import { copy51 } from '../generated/copy/copy51';
import { layout51 } from '../generated/layouts/layout51';
import { palette51 } from '../generated/palettes/palette51';

export function Screen51() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout51.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy51.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy51.detail} / {palette51.name}
			</Text>
		</View>
	);
}
