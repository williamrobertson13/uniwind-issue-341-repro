import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy846 } from '../generated/copy/copy846';
import { layout846 } from '../generated/layouts/layout846';
import { palette846 } from '../generated/palettes/palette846';

const RuntimeView846 = withUniwind(View);

export function Screen846() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView846 styleClassName={layout846.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy846.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy846.detail} / {palette846.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
