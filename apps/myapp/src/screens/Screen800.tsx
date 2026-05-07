import { Pressable, Text, View } from 'react-native';

import { copy800 } from '../generated/copy/copy800';
import { layout800 } from '../generated/layouts/layout800';
import { palette800 } from '../generated/palettes/palette800';

export function Screen800() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout800.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy800.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy800.detail} / {palette800.name}
			</Text>
		</View>
	);
}
