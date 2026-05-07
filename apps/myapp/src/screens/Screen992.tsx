import { Pressable, Text, View } from 'react-native';

import { copy992 } from '../generated/copy/copy992';
import { layout992 } from '../generated/layouts/layout992';
import { palette992 } from '../generated/palettes/palette992';

export function Screen992() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout992.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy992.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy992.detail} / {palette992.name}
			</Text>
		</View>
	);
}
