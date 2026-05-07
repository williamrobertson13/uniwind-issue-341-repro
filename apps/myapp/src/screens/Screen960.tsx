import { Pressable, Text, View } from 'react-native';

import { copy960 } from '../generated/copy/copy960';
import { layout960 } from '../generated/layouts/layout960';
import { palette960 } from '../generated/palettes/palette960';

export function Screen960() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout960.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy960.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy960.detail} / {palette960.name}
			</Text>
		</View>
	);
}
