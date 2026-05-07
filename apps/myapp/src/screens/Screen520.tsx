import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy520 } from '../generated/copy/copy520';
import { layout520 } from '../generated/layouts/layout520';
import { palette520 } from '../generated/palettes/palette520';

const RuntimeView520 = withUniwind(View);

export function Screen520() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView520 styleClassName={layout520.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy520.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy520.detail} / {palette520.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
