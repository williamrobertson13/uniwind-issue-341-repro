import { Pressable, Text, View } from 'react-native';

import { copy528 } from '../generated/copy/copy528';
import { layout528 } from '../generated/layouts/layout528';
import { palette528 } from '../generated/palettes/palette528';

export function Screen528() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout528.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy528.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy528.detail} / {palette528.name}
			</Text>
		</View>
	);
}
