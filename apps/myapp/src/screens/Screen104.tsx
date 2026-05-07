import { Pressable, Text, View } from 'react-native';

import { copy104 } from '../generated/copy/copy104';
import { layout104 } from '../generated/layouts/layout104';
import { palette104 } from '../generated/palettes/palette104';

export function Screen104() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout104.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy104.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy104.detail} / {palette104.name}
			</Text>
		</View>
	);
}
