import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy24 } from '../generated/copy/copy24';
import { layout24 } from '../generated/layouts/layout24';
import { palette24 } from '../generated/palettes/palette24';

const RuntimeView24 = withUniwind(View);

export function Screen24() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView24 styleClassName={layout24.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy24.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy24.detail} / {palette24.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
