import { Pressable, Text, View } from 'react-native';

import { copy896 } from '../generated/copy/copy896';
import { layout896 } from '../generated/layouts/layout896';
import { palette896 } from '../generated/palettes/palette896';

export function Screen896() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout896.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy896.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy896.detail} / {palette896.name}
			</Text>
		</View>
	);
}
