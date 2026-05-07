import { Pressable, Text, View } from 'react-native';

import { copy360 } from '../generated/copy/copy360';
import { layout360 } from '../generated/layouts/layout360';
import { palette360 } from '../generated/palettes/palette360';

export function Screen360() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout360.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy360.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy360.detail} / {palette360.name}
			</Text>
		</View>
	);
}
