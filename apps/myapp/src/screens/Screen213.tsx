import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy213 } from '../generated/copy/copy213';
import { layout213 } from '../generated/layouts/layout213';
import { palette213 } from '../generated/palettes/palette213';

const RuntimeView213 = withUniwind(View);

export function Screen213() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView213 styleClassName={layout213.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy213.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy213.detail} / {palette213.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
