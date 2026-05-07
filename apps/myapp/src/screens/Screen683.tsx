import { Pressable, Text, View } from 'react-native';

import { copy683 } from '../generated/copy/copy683';
import { layout683 } from '../generated/layouts/layout683';
import { palette683 } from '../generated/palettes/palette683';

export function Screen683() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout683.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy683.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy683.detail} / {palette683.name}
			</Text>
		</View>
	);
}
