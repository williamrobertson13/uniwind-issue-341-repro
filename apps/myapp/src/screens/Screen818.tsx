import { Pressable, Text, View } from 'react-native';

import { copy818 } from '../generated/copy/copy818';
import { layout818 } from '../generated/layouts/layout818';
import { palette818 } from '../generated/palettes/palette818';

export function Screen818() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout818.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy818.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy818.detail} / {palette818.name}
			</Text>
		</View>
	);
}
