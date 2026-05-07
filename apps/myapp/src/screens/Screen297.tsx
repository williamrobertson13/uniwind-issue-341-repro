import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy297 } from '../generated/copy/copy297';
import { layout297 } from '../generated/layouts/layout297';
import { palette297 } from '../generated/palettes/palette297';

const RuntimeView297 = withUniwind(View);

export function Screen297() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView297 styleClassName={layout297.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy297.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy297.detail} / {palette297.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
