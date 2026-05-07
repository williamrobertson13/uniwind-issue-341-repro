import { Pressable, Text, View } from 'react-native';

import { copy226 } from '../generated/copy/copy226';
import { layout226 } from '../generated/layouts/layout226';
import { palette226 } from '../generated/palettes/palette226';

export function Screen226() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout226.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy226.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy226.detail} / {palette226.name}
			</Text>
		</View>
	);
}
