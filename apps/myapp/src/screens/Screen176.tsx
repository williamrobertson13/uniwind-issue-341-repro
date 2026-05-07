import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy176 } from '../generated/copy/copy176';
import { layout176 } from '../generated/layouts/layout176';
import { palette176 } from '../generated/palettes/palette176';

const RuntimeView176 = withUniwind(View);

export function Screen176() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView176 styleClassName={layout176.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy176.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy176.detail} / {palette176.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
