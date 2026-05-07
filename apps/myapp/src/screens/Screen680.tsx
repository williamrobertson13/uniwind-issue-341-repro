import { Pressable, Text, View } from 'react-native';

import { copy680 } from '../generated/copy/copy680';
import { layout680 } from '../generated/layouts/layout680';
import { palette680 } from '../generated/palettes/palette680';

export function Screen680() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout680.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy680.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy680.detail} / {palette680.name}
			</Text>
		</View>
	);
}
