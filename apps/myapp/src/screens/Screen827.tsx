import { Pressable, Text, View } from 'react-native';

import { copy827 } from '../generated/copy/copy827';
import { layout827 } from '../generated/layouts/layout827';
import { palette827 } from '../generated/palettes/palette827';

export function Screen827() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout827.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy827.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy827.detail} / {palette827.name}
			</Text>
		</View>
	);
}
