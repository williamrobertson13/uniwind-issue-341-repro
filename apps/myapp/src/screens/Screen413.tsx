import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy413 } from '../generated/copy/copy413';
import { layout413 } from '../generated/layouts/layout413';
import { palette413 } from '../generated/palettes/palette413';

const RuntimeView413 = withUniwind(View);

export function Screen413() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView413 styleClassName={layout413.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy413.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy413.detail} / {palette413.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
