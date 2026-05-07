import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy989 } from '../generated/copy/copy989';
import { layout989 } from '../generated/layouts/layout989';
import { palette989 } from '../generated/palettes/palette989';

const RuntimeView989 = withUniwind(View);

export function Screen989() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView989 styleClassName={layout989.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy989.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy989.detail} / {palette989.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
