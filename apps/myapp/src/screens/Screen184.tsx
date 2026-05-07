import { Pressable, Text, View } from 'react-native';

import { copy184 } from '../generated/copy/copy184';
import { layout184 } from '../generated/layouts/layout184';
import { palette184 } from '../generated/palettes/palette184';

export function Screen184() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout184.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy184.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy184.detail} / {palette184.name}
			</Text>
		</View>
	);
}
