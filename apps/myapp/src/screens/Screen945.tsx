import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy945 } from '../generated/copy/copy945';
import { layout945 } from '../generated/layouts/layout945';
import { palette945 } from '../generated/palettes/palette945';

const RuntimeView945 = withUniwind(View);

export function Screen945() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView945 styleClassName={layout945.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy945.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy945.detail} / {palette945.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
