import { Pressable, Text, View } from 'react-native';

import { copy840 } from '../generated/copy/copy840';
import { layout840 } from '../generated/layouts/layout840';
import { palette840 } from '../generated/palettes/palette840';

export function Screen840() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout840.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy840.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy840.detail} / {palette840.name}
			</Text>
		</View>
	);
}
