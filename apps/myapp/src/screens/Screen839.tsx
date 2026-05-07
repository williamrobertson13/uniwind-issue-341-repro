import { Pressable, Text, View } from 'react-native';

import { copy839 } from '../generated/copy/copy839';
import { layout839 } from '../generated/layouts/layout839';
import { palette839 } from '../generated/palettes/palette839';

export function Screen839() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout839.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy839.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy839.detail} / {palette839.name}
			</Text>
		</View>
	);
}
