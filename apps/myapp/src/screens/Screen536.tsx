import { Pressable, Text, View } from 'react-native';

import { copy536 } from '../generated/copy/copy536';
import { layout536 } from '../generated/layouts/layout536';
import { palette536 } from '../generated/palettes/palette536';

export function Screen536() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout536.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy536.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy536.detail} / {palette536.name}
			</Text>
		</View>
	);
}
